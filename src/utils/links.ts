const siteLink = (path: string) => {
  if (import.meta.env.BASE_URL == "/") {
    return `/${path}`;
  } else {
    return `${import.meta.env.BASE_URL}/${path}`;
  }
};
export { siteLink };
