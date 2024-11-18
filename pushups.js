// Function to upload a new video
function uploadVideo() {
    const videoInput = document.getElementById('video-upload'); // Get the video input element
    const uploadedVideosContainer = document.getElementById('uploaded-videos'); // Get the uploaded videos container

    // Check if a file is selected
    if (videoInput.files.length === 0) {
        alert('Please select a video to upload.');
        return;
    }

    const file = videoInput.files[0]; // Get the selected video file

    // Create a new video card
    const videoCard = document.createElement('div');
    videoCard.classList.add('uploaded-video-card');

    // Add video element
    const videoElement = document.createElement('video');
    videoElement.controls = true;
    videoElement.src = URL.createObjectURL(file); // Create a URL for the uploaded video

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        videoCard.remove(); // Remove the video card from the DOM
    };

    // Append the video element and delete button to the video card
    videoCard.appendChild(videoElement);
    videoCard.appendChild(deleteButton);

    // Add the video card to the uploaded videos container
    uploadedVideosContainer.appendChild(videoCard);

    // Clear the input field
    videoInput.value = '';
}
