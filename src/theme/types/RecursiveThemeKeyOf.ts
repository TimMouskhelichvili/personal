type RecursiveThemeKeyOf<TObj extends object> = (
	(
		{
			[ TPropName in keyof TObj & string ]: HandleProperty<TObj[TPropName], TPropName>;
		}
	) [ keyof TObj & string ]
);

type HandleProperty<TValue, TPropName extends string> =
	TValue extends object ? 
		`${TPropName}` | `${TPropName}.${RecursiveThemeKeyOf<TValue>}` 
	  : `${TPropName}`;

export type {
    RecursiveThemeKeyOf
};