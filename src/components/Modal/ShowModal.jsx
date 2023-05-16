import React,{useState,useEffect} from 'react';
import Modal from 'react-modal';
//Styled
import "./ShowModal.css";

function ShowModal() {
    const [showModal,setShoModal]=useState(false);

    useEffect(()=>{
        setShoModal(true)
        Modal.setAppElement("#root")
    },[])

  return (
    <div className='modalcontainer'>
        <Modal className="modal" isOpen={showModal}>
        <h2>سلام</h2>
        <h4>سپاس بابت دیدن نمونه کار اینجانب</h4>
        <p>نمونه سایتی که مشاهده میکنید یک سایت خبرگزاری هستش</p>
        <span>کامیار کمالی کمازانی</span>
        <div className='btnmodal'>
        <button onClick={()=>setShoModal(false)}>بستن</button>
        </div>
        </Modal>
    </div>
  )
}

export default ShowModal;