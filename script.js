document.getElementById("btn-submit").addEventListener("click", Hitung);

function Hitung() {
  const tinggi = document.getElementById("input-height").value / 100;
  const berat = document.getElementById("input-weight").value;
  const tinggiKuadrat = tinggi * tinggi;
  const result = berat / tinggiKuadrat;

  // logic if result

  if (result < 18.5) {
    alert("Berat Badan Kurang");
  } else if (result <= 22.9) {
    alert("Normal");
  } else if (result <= 24.9) {
    alert("Kelebihan");
  } else if (result <= 29.9) {
    alert("obesitas tingkat 1");
  } else if (result > 30) {
    alert("obesitas 2");
  }
}
