interface IuserDetails {
    content : string,
    title : string
}

interface IresPosts {
    // [prorp : string] : {content : string, title : string}
    [prorp : string] :IuserDetails
}

let res = [
    {
        NPY524WQKbAlicy67Tw: {
            content: "zaq",
            title: "zaq"
        }
    },
    {
        nNPY53zpaO98n31L22E5: {
            content: "xsw",
            title: "xsw"
        }
    },
    {
        nNPY9EaIhWM5aMbAhQFk: {
            content: "qwerty",
            title: "qwerty"
        }
    }
]