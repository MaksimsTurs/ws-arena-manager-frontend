import scss from './loader.module.scss'

const Loader = () => {
	return (
		<div className={scss.loader_container}>
			<span className={scss.loader}></span>
		</div>
	)
}

export default Loader
