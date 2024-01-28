const getRequest = async () => {
    const result = await fetch("https://swapi.co/api/films/2/");
    return result;
}