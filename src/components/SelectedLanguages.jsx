import { memo } from "react";
import { Link, useParams } from "react-router-dom";
const languages = [`All`, `Javascript`, `CSS`, `Python`, `Java`, `Ruby`]

const SelectedLanguages = memo((props) => {
	const {languageParams} = useParams()
	return (
			<ul className='popular-container__tabs'>
				{languages.map((language, index)=>(
					<li 
						key={index} 
						style={language===props.selectedLanguage? {color: '#ff9b9b'} : {}}
						onClick={()=>props.selectedLanguageHandler(language)} 
						className='popular-container__list__tab'
					>
						{!props.disabledBtn? <Link to= {`/popular/${language}`} className={language===languageParams? `active`: ``} key={index}>{language}</Link> 
						: <Link to= {`#`} className={`disabled`} key={index}>{language}</Link>}
					</li>
				))}
			</ul>
	);
})

export default SelectedLanguages;