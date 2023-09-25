import Classes from './Loader.module.css';

const Loader = () => {
    return (
        <div>
            <div className={Classes.loaderSpinng} >
                <div className="spinner-border spinner-border-lg text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        </div>

    )
}
export default Loader;