// Function to add a bucket list item
function addBucketItem() {
    const bucketInput = document.getElementById('bucket-input').value.trim();

    if (!bucketInput) {
        alert('Please enter an activity or goal.');
        return;
    }

    // Retrieve the bucket list from localStorage
    const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];

    // Add the new item
    bucketList.push({ text: bucketInput, completed: false });
    localStorage.setItem('bucketList', JSON.stringify(bucketList));

    // Clear input field and refresh the list
    document.getElementById('bucket-input').value = '';
    loadBucketList();
}

// Function to load and display the bucket list
function loadBucketList() {
    const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
    const bucketListElement = document.getElementById('bucket-list');
    bucketListElement.innerHTML = '';

    // Create list items
    bucketList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = item.completed ? 'completed' : '';
        listItem.textContent = item.text;

        // Mark as completed toggle
        listItem.onclick = () => toggleCompletion(index);

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = (e) => {
            e.stopPropagation(); // Prevent toggleCompletion when deleting
            deleteBucketItem(index);
        };

        listItem.appendChild(deleteButton);
        bucketListElement.appendChild(listItem);
    });
}

// Function to toggle the completion status of an item
function toggleCompletion(index) {
    const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
    bucketList[index].completed = !bucketList[index].completed;
    localStorage.setItem('bucketList', JSON.stringify(bucketList));
    loadBucketList();
}

// Function to delete a bucket list item
function deleteBucketItem(index) {
    const bucketList = JSON.parse(localStorage.getItem('bucketList')) || [];
    bucketList.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('bucketList', JSON.stringify(bucketList));
    loadBucketList();
}

// Load bucket list on page load
document.addEventListener('DOMContentLoaded', loadBucketList);
