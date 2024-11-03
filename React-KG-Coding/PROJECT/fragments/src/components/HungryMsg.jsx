import styles from './HungryMsg.module.css'
function HungryMsg({items}){

if(items.length===0){
  return <h3 className={`${styles['heading'],'display-1'}`}>I'm Hungry</h3> //because we return if so no need to write else
}
}

export default HungryMsg;