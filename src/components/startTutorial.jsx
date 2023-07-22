import { useHomeContext } from "../context/HomeContext";


const StartTutorial = () => {
  const {textColor} = useHomeContext();
  return(
    <>
    {/* <!-- start of tutorial section --> */}
        <div  className="swapmute">
            <p className={`text-${textColor}`}>How to use<span> OSICRYPTO</span> Exchange?</p>
            <div className="tutorial">
                <p className={`text-${textColor}`}><span>1</span>Select currency</p>
                <p className={`text-${textColor}`}><span>2</span>Enter address</p>
                <p className={`text-${textColor}`}><span>3</span>Exchange</p>
            </div>
        </div>
    {/* <!-- end of totorial section --> */}
    </>
  )
}
export default StartTutorial;