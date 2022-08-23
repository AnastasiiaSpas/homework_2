import React, {useState, useEffect} from 'react';
import githubRepos from '../services/githubRepos';
import SelectedLanguages from '../components/SelectedLanguages'
import Repos from '../components/Repos';
import {useParams} from 'react-router-dom'
import { InfinitySpin } from  'react-loader-spinner'

const Popular = () =>  {
	const [selectedLanguage, setSelectedLanguage] = useState(`All`)
	const [repos, setRepos] = useState([])
	const [load, setLoad] = useState()
	const {languageParams} = useParams()

	const selectedLanguageHandler = async(language) => {
		setSelectedLanguage(language)
	}

	useEffect(()=>{
		if(languageParams){
			(async()=>{
				setLoad(true)
				let getRepos = await githubRepos(languageParams)
				setRepos(getRepos)
				if(repos) setLoad(false)
			})()
		}
	},[languageParams])

	return (
		<div className='popular-container'>
			<SelectedLanguages 
				selectedLanguage={selectedLanguage}
				selectedLanguageHandler={selectedLanguageHandler}
				languageParams={languageParams}
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