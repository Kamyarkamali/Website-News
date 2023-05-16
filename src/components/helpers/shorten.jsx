const shorten=(title)=>{
    const spliteTitle=title.split("");
    const newTtile=`${spliteTitle[0]} ${spliteTitle[5]} ${spliteTitle[2]} ${spliteTitle[11]} `
    return newTtile;
}

export {shorten};