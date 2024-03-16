function loaderOn() {
    document.getElementById('loader').style.display = 'flex';

}

function loaderOff() {
    document.getElementById('loader').style.display = 'none';
}

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault
    loaderOn(); // Show loader when button is clicked
    
    // Simulate an asynchronous action with setTimeout
    setTimeout(function() {
      loaderOff(); // Hide loader after x seconds (simulating an action)
    }, 500);
});

loaderOn();
setTimeout(function() {
loaderOff();
}, 500);