const suggestionItems = document.querySelectorAll('.simple-list li');

suggestionItems.forEach(item => {
    item.style.cursor = "pointer"; 
    item.setAttribute('title', 'Click to follow');
    item.addEventListener('click', function() {
        if(!this.classList.contains('followed-active')) {
            const name = this.querySelector('strong').innerText;
                        this.style.opacity = "0.6";
            this.style.transition = "all 0.3s";
            this.innerHTML = `<strong>✅ Following</strong><br /><span class="muted">${name}</span>`;
            this.classList.add('followed-active'); 
        }
    });
});


const connectButtons = document.querySelectorAll('.connect-btn');

if (connectButtons.length > 0) {
    connectButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            if (this.innerText === "Connect") {
                this.innerText = "Connected";
                this.classList.add('connected'); 
            } else {
                this.innerText = "Connect";
                this.classList.remove('connected'); 
            }
            
        });
    });
}


const msgForm = document.querySelector('.messages').nextElementSibling.querySelector('form');
const msgTable = document.querySelector('.messages');

if (msgForm) {
    msgForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const msgInput = document.getElementById('message');
        const text = msgInput.value;

        if (text.trim() !== "") {
            const row = msgTable.insertRow();
            const cell = row.insertCell(0);
            cell.className = 'card';
            cell.innerHTML = `<strong>You</strong><br /><span class="muted">${text}</span>`;
            
            msgInput.value = '';

            setTimeout(() => {
                const replyRow = msgTable.insertRow();
                const replyCell = replyRow.insertCell(0);
                replyCell.className = 'card';
                replyCell.style.borderLeft = "4px solid #6a4df5"; 
                replyCell.innerHTML = `<strong>Harvey Specter</strong><br /><span class="muted">Got it. I'll take a look shortly.</span>`;
            }, 2000); 
        }
    });
}
