{
  description = "Sherpa Flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    allSystems = [
      "x86_64-linux" # 64bit AMD/Intel x86
      "aarch64-linux"
    ];

    forAllSystems = fn:
      nixpkgs.lib.genAttrs allSystems
      (system: fn {pkgs = import nixpkgs {inherit system;};});
  in {
    devShells = forAllSystems ({pkgs}: {
      dev = pkgs.mkShell {
        name = "nix";
        buildInputs = [pkgs.nodejs pkgs.pnpm];
        shellHook = ''
          pnpm dev
        '';
      };
      default = pkgs.mkShell {
        name = "nix";
        buildInputs = [pkgs.nodejs pkgs.pnpm];
      };
    });
  };
}

