console.log("SCRIPT LOADED");
/* ====================================
   WEBSITE STATUS
==================================== */
import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

const firebaseConfig = {

    apiKey: "AIzaSyDrMvk2Oe527uQkqwffl874HoPipL9xM_A",

    authDomain:
    "huathinh-2d1d3.firebaseapp.com",

    databaseURL:
    "https://huathinh-2d1d3-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId:
    "huathinh-2d1d3",

    storageBucket:
    "huathinh-2d1d3.firebasestorage.app",

    messagingSenderId:
    "46948944737",

    appId:
    "1:46948944737:web:0b8297677dbda32c0cd320"
};

const app =
initializeApp(firebaseConfig);

onValue(
    ref(db, "status"),
    (snapshot) => {

        const active =
        snapshot.val();

        console.log(
            "Firebase Status:",
            active
        );

        setStatus(active);

    }
);

/* ====================================
   ORDER MODAL
==================================== */

function orderNow() {
    
    const modal =
        document.getElementById(
            "orderModal"
        );
    
    if (!modal) return;
    
    modal.classList.remove(
        "hide"
    );
    
    modal.classList.add(
        "show"
    );
}
function closeModal() {
    
    const modal =
        document.getElementById(
            "orderModal"
        );
    
    if (!modal) return;
    
    modal.classList.add("hide");
    
    setTimeout(() => {
        
        modal.classList.remove(
            "show"
        );
        
        modal.classList.remove(
            "hide"
        );
        
    }, 250);
}
window.orderNow = orderNow;

window.closeModal = closeModal;
/* ====================================
   ESC TO CLOSE MODAL
==================================== */

document.addEventListener(
    "keydown",
    function(e) {
        
        if (
            e.key === "Escape"
        ) {
            
            closeModal();
        }
    });

/* ====================================
   CARD FADE-IN EFFECT
==================================== */

window.addEventListener(
    "load",
    function() {
        
        document.body.classList.add(
            "loaded"
        );
    });

/* ====================================
   OPTIONAL:
   CHANGE STATUS MANUALLY
==================================== */

/*

Để đổi trạng thái thủ công:

setStatus(true);
setStatus(false);

*/

function setStatus(value) {
    
    const status =
        document.getElementById(
            "statusText"
        );
    
    if (value) {
        
        status.className =
            "online";
        
        status.innerHTML =
            "🟢 Hoạt Động";
        
    } else {
        
        status.className =
            "offline";
        
        status.innerHTML =
            "🔴 Không Hoạt Động";
    }
}
