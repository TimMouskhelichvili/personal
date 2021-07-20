interface IIconDefinition {
    icon: [

        /**
         * The width.
         */
        number,
        
        /**
         * The height.
         */
        number,

        /**
         * The ligatures.
         */
        string[],

        /**
         * The unicode.
         */
        string,

        /**
         * The svgPathData.
         */
        string | string[]
    ];
}

export type {
    IIconDefinition
};