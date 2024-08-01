const Settings = () => {
    return(
       <div className="settings-container">
         <h2>Update hotel settings</h2>
         <div>
            <div className="settings-inputs">
              <p>Minimum nights/booking</p> 
              <input type="text"/>
            </div>
            <div className="settings-inputs">
              <p>Maximum nights/booking</p> 
              <input type="text"/>
            </div>
            <div className="settings-inputs">
              <p>Maximum guests/booking</p> 
              <input type="text"/>
            </div>
            
         </div>
       </div>
    )
}

export default Settings