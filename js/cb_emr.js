// Chat GPT 코드 //

// '<' & '>' 버튼에 관한 코드 //
function submitFormAndNavigate() {
  const form = document.getElementById('yejinForm');
  form.submit();
  // Add code to navigate to the next page
}


// textarea가 입력된 내용의 rows 값에 따라 아래로 길어지는 코드 //
const textarea = document.getElementsByClassName("patientYejinText");
const container = document.getElementsByClassName("patientYejinTab");

textarea.addEventListener("input", function () {
  this.style.rows = "auto"; // Reset textarea height
  this.style.rows = this.scrollHeight + "px"; // Set the new height

  container.style.height = this.scrollHeight + "px"; // Adjust container height
});

