const enroll = document.getElementById("enroll");
enroll.addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var site = document.getElementById("site").value;
    var image = document.getElementById("image").value;
    var gender = document.querySelectorAll("#gender");
    gender = Array.from(gender).filter((gen) => gen.checked).map((gen) => gen.value);
    var skills = document.querySelectorAll("#skills");
    var skills = Array.from(skills).filter((skill) => skill.checked).map((skill) => skill.value);
    
    const displaydiv = document.getElementById("display-div");
    var studentDetails = `<div class="flex items-center w-full my-8 bg-white border border-gray-200 rounded-lg shadow flex-row max-w-xl hover:bg-gray-100">
                            <img class="object-cover w-48 h-48 rounded -lg" src="${image}"
                                alt="student image">
                            <div class="flex flex-col justify-between p-4 leading-normal w-72">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${name}</h5>
                                <p class="mb-1 font-normal text-gray-700">${gender}</p>
                                <p class="mb-1 font-normal text-gray-700">${mail}</p>
                                <p class="mb-1 font-normal text-gray-700">${site}</p>
                                <p class="mb-3 font-normal text-gray-700">${skills.join(", ")}</p>
                            </div>
                        </div>`;
    displaydiv.innerHTML += studentDetails;
    
});

const clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("site").value = "";
    document.getElementById("image").value = "";
    document.getElementById("gender").checked = false;
    document.querySelectorAll("#skills").forEach((skill) => skill.checked = false);
});
                                                                                                      
    