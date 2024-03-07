import './App.css';
import {useEffect, useState} from "react";
import {getContacts} from "./api/ContactService";
import Header from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import ContactList from "./components/ContactList";

function App() {
  const [data,setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const getAllContacts = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const {data} = await getContacts(page,size);
      setData(data);
      console.log(data);
    }
    catch (error) {
      console.log(error)
    }
  }
  const toggleModal = (show) => {console.log('Clicked')}
  useEffect(() => {
    getAllContacts();
  },[]);
  return (
    <>
      <Header toggleModal={toggleModal} nbOfContacts={data.totalElements}></Header>
      <main className='main'>
        <div className='container'>
      <Routes>
        <Route path="/" element={<Navigate to={"/contacts"} />} />
        <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />} />
      </Routes>
        </div>
      </main>

      {/* Modal */}
      <dialog className="modal" id="modal">
        <div className="modal__header">
          <h3>New Contact</h3>
          <i onClick={() => toggleModal(false)} className="bi bi-x-lg"></i>
        </div>
        <div className="divider"></div>
        <div className="modal__body">
          <form>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name</span>
                <input type="text"  name='name' required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text"  name='email' required />
              </div>
              <div className="input-box">
                <span className="details">Title</span>
                <input type="text" name='title' required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text"  name='phone' required />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input type="text"  name='address' required />
              </div>
              <div className="input-box">
                <span className="details">Account Status</span>
                <input type="text"  name='status' required />
              </div>
              <div className="file-input">
                <span className="details">Profile Photo</span>
                <input type="file" name='photo' required />
              </div>
            </div>
            <div className="form_footer">
              <button onClick={() => toggleModal(false)} type='button' className="btn btn-danger">Cancel</button>
              <button type='submit' className="btn">Save</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
}

export default App;
