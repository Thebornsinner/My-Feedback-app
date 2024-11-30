import Proptypes from'prop-types'
function Cardd({children, reverse}) {
  return (  
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )
}
 Cardd.defaultProps= {
    reverse: false,
 }
 Cardd.propTypes={
    children: Proptypes.node.isRequired,
    reverse: Proptypes.bool,
 }
export default Cardd