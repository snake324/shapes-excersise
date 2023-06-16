document.getElementById('triangle').addEventListener('click', function() {
    this.style.display = 'none';
  });
  
  document.getElementById('square').addEventListener('click', function() {
    this.style.display = 'none';
  });
  
  document.getElementById('circle').addEventListener('click', function() {
    this.style.display = 'none';
  });
  
  document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('triangle').style.display = 'block';
    document.getElementById('square').style.display = 'block';
    document.getElementById('circle').style.display = 'block';
  });
  