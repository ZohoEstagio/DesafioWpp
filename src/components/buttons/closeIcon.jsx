export const IconlyCloseSquare = ({ size = 24, color = "#000000" }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.6455 10.1294L9.85352 14.9214" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
			<path d="M14.6456 14.9244L9.84961 10.1274" stroke={color} strokeWidth="1.5" strokeLinecap="square"></path>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.25 21.7847C17.3586 21.7847 21.5 17.6433 21.5 12.5347C21.5 7.42603 17.3586 3.28467 12.25 3.28467C7.14137 3.28467 3 7.42603 3 12.5347C3 17.6433 7.14137 21.7847 12.25 21.7847Z"
				stroke={color}
				strokeWidth="1.5"
				strokeLinecap="round"></path>
		</svg>
	);
};