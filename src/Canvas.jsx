import useCanvas from './components/useCanvas'
const Canvas = props => {
	const {draw, ...rest} = props
	const ref = useCanvas(draw);

	return <canvas ref={ref} {...rest}/>

} 

export default Canvas