import logo from '../logo.svg'
function ImgComponent() {
    return <img src={require('../logo.svg').default} />
}

export default ImgComponent;