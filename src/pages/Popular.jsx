import React, {useState, useEffect} from 'react';
import githubRepos from '../services/githubRepos';
import SelectedLanguages from '../components/SelectedLanguages'
import Repos from '../components/Repos';
import {useParams} from 'react-router-dom'
import { InfinitySpin } from  'react-loader-spinner'

const Popular = () =>  {
	const [selectedLanguage, setSelectedLanguage] = useState(`All`)
	const [repos, setRepos] = useState([])
	const [load, setLoad] = useState(false)
	const {languageParams} = useParams()
	const [disabledBtn, setDisabledBtn] = useState(false)
	
	const useDebounce = (value, delay) => {
		const [debouncedValue, setDebouncedValue] = useState(value);
		useEffect(
		  () => {
			 const handler = setTimeout(() => {
				setDebouncedValue(value)
			 }, delay);
			 return () => {
				clearTimeout(handler)
			 };
		  },
		  [value, delay]
		);
		return debouncedValue;
	}

	const debouncedLanguage = useDebounce(languageParams, 1500);

	const selectedLanguageHandler = async(language) => {
		setSelectedLanguage(language)
		setDisabledBtn(true)
	}

	useEffect(()=>{
		if(languageParams){
			(async()=>{
				setDisabledBtn(true)
				setLoad(true)
				let getRepos = await githubRepos(debouncedLanguage)
				setRepos(getRepos)
				if(getRepos){
					setDisabledBtn(false)
					setLoad(false)
				}
			})()
		}
	},[debouncedLanguage])

	console.log(disabledBtn)

	return (
		<div className='popular-container'>
			<SelectedLanguages 
				selectedLanguage={selectedLanguage}
				selectedLanguageHandler={selectedLanguageHandler}
				languageParams={languageParams}
				disabledBtn={disabledBtn}
			/>
			{load?
				<div className='Preloader'>
					<InfinitySpin 
						width='200'
						color="#af0202"
					/>
				</div>
			: repos.length? <Repos repos={repos}/> : null}
			
		</div>
	);
}

export default Popular;