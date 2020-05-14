let initialFinal = () => {
    const [last, ...initial] = [1, 2, 3].reverse();
    console.log(`${last} ${initial}` );
}
initialFinal();