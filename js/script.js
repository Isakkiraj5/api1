fetch("https://cat-fact.herokuapp.com/facts")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    
    console.log(data); // Log the fetched data to the console

    // to display each fact in a separate div
    const row = document.getElementById("row");
    data.forEach((fact) => {
      const col = document.createElement("div");
      col.className = "col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mt-2";
      card=document.createElement("div");
      card.className="card";
      col.appendChild(card)
      card.textContent = fact.text; 
      row.appendChild(col);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
