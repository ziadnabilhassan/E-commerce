
    const searchInput = document.getElementById('search');
    const dataTable = document.getElementById('myTable');
    const tableRows = dataTable.getElementsByTagName('tr');

    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase();

        for (let i = 1; i < tableRows.length; i++) {
            const rowData = tableRows[i].textContent.toLowerCase();
            if (rowData.includes(searchText)) {
                tableRows[i].style.display = '';
            } else {
                tableRows[i].style.display = 'none';
            }
        }
    });
