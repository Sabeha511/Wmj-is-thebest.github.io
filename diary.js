// Function to save a diary entry
function saveEntry() {
    const dateInput = document.getElementById('entry-date').value;
    const diaryText = document.getElementById('diary-text').value;

    if (!dateInput || !diaryText.trim()) {
        alert('Please enter both a date and some text for your diary entry.');
        return;
    }

    // Retrieve existing entries from localStorage
    const diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];

    // Add new entry
    diaryEntries.push({ date: dateInput, text: diaryText });
    localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));

    // Clear inputs
    document.getElementById('entry-date').value = '';
    document.getElementById('diary-text').value = '';

    // Refresh diary list
    loadEntries();
}

// Function to load and display diary entries
function loadEntries() {
    const diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    const diaryList = document.getElementById('diary-list');
    diaryList.innerHTML = '';

    // Add entries to the list
    diaryEntries.forEach((entry, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'diary-item';

        const textDiv = document.createElement('div');
        textDiv.textContent = `${entry.date}: ${entry.text.slice(0, 30)}...`;
        textDiv.onclick = () => viewEntry(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = (e) => {
            e.stopPropagation(); // Prevent triggering `viewEntry`
            deleteEntry(index);
        };

        listItem.appendChild(textDiv);
        listItem.appendChild(deleteButton);
        diaryList.appendChild(listItem);
    });
}

// Function to view a single diary entry
function viewEntry(index) {
    const diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    const entry = diaryEntries[index];
    if (entry) {
        alert(`Date: ${entry.date}\n\n${entry.text}`);
    }
}

// Function to delete a diary entry
function deleteEntry(index) {
    const diaryEntries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    diaryEntries.splice(index, 1); // Remove the entry at the specified index
    localStorage.setItem('diaryEntries', JSON.stringify(diaryEntries));
    loadEntries(); // Refresh the diary list
}

// Load entries on page load
document.addEventListener('DOMContentLoaded', loadEntries);
