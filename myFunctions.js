function toggleDetails(button) {
    const row = button.parentElement.parentElement;
    const detailsRow = document.createElement('tr');
    detailsRow.innerHTML = `<td colspan="4" style="background-color: #e8f5e9; text-align: right;">
        <strong>الناشر:</strong> دار المعارف<br>
        <strong>التصنيف:</strong> قصص شعبية<br>
        <strong>ملخص:</strong> كتاب يحتوي على مجموعة قصص شرقية.
    </td>`;
    if (button.textContent === "إظهار التفاصيل") {
        row.parentElement.insertBefore(detailsRow, row.nextSibling);
        button.textContent = "إخفاء التفاصيل";
    } else {
        row.parentElement.removeChild(row.nextSibling);
        button.textContent = "إظهار التفاصيل";
    }
}

function validateForm(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value.trim();
    const nationalID = document.getElementById("nationalID").value.trim();
    if (!fullName || !nationalID) {
        alert("الرجاء ملء الحقول المطلوبة.");
        return;
    }
    alert("تم إرسال النموذج بنجاح!");
}
