<script>
    let date = new Date();
    let dates = [date];

    function updateDate() {
        date = new Date();
        // dates.push(date);
        // dates = dates;
        dates = [...dates, date];
    }

</script>


<div>Current date: {date}</div>
<button on:click={updateDate}>Update Date</button>

<div>{JSON.stringify(dates)}</div>