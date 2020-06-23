class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.idInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.forState = "add";
  }


  //Show all posts:
  showPosts(posts) {
    let output = "";

    posts.forEach((post) => {
      output += `
      <div class="card mb-3>
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
          </a>

          <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i> 
          </a>
        </div>
      </div>
      `;
    });

    this.post.innerHTML = output;

    // //This log is a test to see if it is being called:
    //     console.log(posts);
  }


  //Show the alert messages:
  showAlert(message, className) {
    this.clearAlert();

    //Create the div:
    const div = document.createElement("div");
    //add Classes:
    div.className = className;
    //Add text:
    div.appendChild(document.createTextNode(message));
    //Get the parent:
    const container = document.querySelector(".postsContainer");
    //Get posts:
    const posts = document.querySelector("#posts");
    //Insert the alert div before the posts:
    container.insertBefore(div, posts);

    //Timeout after 3s:
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  //Clear the alert messages:
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //Clear all the fields:
  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  //Fill form to edit
  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.idInput.value = data.id;

    this.changeFormState('edit');
  }

  //Clear ID hidden value:
  clearIDInput() {
    this.idInput.value = '';
  }

  //Change the form state:
  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';

      //Create the cancel button:
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-light btn-block';
      button.appendChild(document.createTextNode('Cancel Edit'));

      //Get the parent:
      const cardForm = document.querySelector('.card-form');
      //Get the element to insert before:
      const formEnd = document.querySelector('.form-end');
      //Insert the cancel button here:
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-warning btn-primary';

      //Remove the cancel button if its there:
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      //Clear the ID from the hidden field:
      this.clearIDInput();
      //Clear the text fields:
      this.clearFields();
    }
  }

}

export const ui = new UI();