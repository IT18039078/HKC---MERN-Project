// save canvas as image
const saveCanvas = () =>{
  const canvasSave = document.getElementById('canvas');
  const d = canvasSave.toDataURL('image/png');
  const w = window.open('about:blank', 'image from canvas');
  w.document.write("<img src='"+d+"' alt='from canvas'/>");
  console.log('Saved!');
}
