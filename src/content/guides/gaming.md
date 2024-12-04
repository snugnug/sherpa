---
title: Gaming on NixOS
---

Gaming may naturally be a major field of concern regarding NixOS's compatibility. Thankfully, like any modern Linux distribution, NixOS can play the vast majority of games just as well as Windows.

## Launchers

There are various launchers used in modern gaming, here are a few that you will likely find useful on Linux.

### Steam

Steam is a major distributor of games with first-class Linux support, and excellent support on NixOS. It can be installed as simply as:

```nix
# /etc/nixos/configuration.nix
programs.steam = {
    enable = true; # Enable Steam
};
```

Some options you may wish to be aware of:

| Option | Definition |
|________|____________|
| `programs.steam.package` | Allows you to define a specific Steam package, for example for use with overrides |
| `programs.steam.protontricks.enable` | Enables protontricks (like winetricks for Proton) |
| `programs.steam.remotePlay.openFirewall` | Opens the firewall for Steam Remote Play |

Please note that this table is not exhaustive and the official NixOS options search should be referenced.

### Heroic Games Launcher

Heroic Games Launcher is a more recent FOSS launcher with support for games from GOG, Epic, and Amazon Prime Games, native to Linux.

It does not have extensive option declaration however can certainly be added as a package:

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
    heroic
];
```

### Lutris

Lutris is another FOSS launcher with support for many different games along with custom installers to improve compatibility for a wide array of games, such as Battle.net, EA Games, and even standalone games like Osu! or Genshin Impact.

It may also be installed as a package:

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
    lutris
];
```

### Bottles

Finally, Bottles is a relatively new, GTK4 and FOSS launcher that advertises compatibility with Windows games and software through preconfigured environments. They support many different launchers such as Epic Games, EA Launcher, and Battle.net.

While they recommend their Flatpak package, we would recommend the app packaged in nixpkgs due to its closer support with Nix.

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
    bottles
];
```

## Useful Utilities

Beyond launching a game, NixOS comes with many additional programs and features that are highly useful for gaming.

### GameMode

GameMode performs optimizations on the host system and/or game process to improve performance.

It can be enabled and configured declaratively like so:

```nix
# /etc/nixos/configuration.nix
programs.gamemode = {
    enable = true;
    settings = {
        # Example config from nixpkgs
        general = {
            renice = 10;
        };

        # Warning: GPU optimisations have the potential to damage hardware
        gpu = {
            apply_gpu_optimisations = "accept-responsibility";
            gpu_device = 0;
            amd_performance_level = "high";
        };

        custom = {
            start = "${pkgs.libnotify}/bin/notify-send 'GameMode started'";
            end = "${pkgs.libnotify}/bin/notify-send 'GameMode ended'";
        };
    };
};
```

Please reference their man pages for exhaustive list of settings.

You can launch a game with GameMode through Steam by setting `gamemoderun %command%` as a launch option, enabling GameMode as the game is launched.

### Gamescope

Gamescope is another major utility developed by Valve that acts as a microcompositor helping improve consistency in games on Linux.

Likewise, it has excellent support in NixOS. It can be enabled and configured declaratively:

```nix
# /etc/nixos/configuration.nix
programs.gamescope = {
    enable = true;
    args = [ # Define arguments to launch Gamescope with.
        # Following example from nixpkgs.
        "--rt"
        "--prefer-vk-device 8086:9bc4"   
    ];
};
```

You can also use ChimeraOS's fork, Gamescope-Session, which creates a special Gamescope session to launch from the Display Manager.

```nix
# /etc/nixos/configuration.nix
programs.steam.gamescopeSession = {
    enable = true;
    args = []; # Works the same as programs.gamescope.args
    env = {}; # Define environmental variables for the Gamescope session.
};
```

### Protonup

You may wish to install different versions of Proton, such as Glorious Eggroll's fork. You can do so by installing the protonup CLI:

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
    protonup
];
```

And then running it to install the latest Proton-GE:

```
protonup
```

You will then need to fully restart Steam and then select it in Settings->Compatibility.
