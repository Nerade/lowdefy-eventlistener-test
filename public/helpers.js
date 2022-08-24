var MY_FILE_UPLOAD = undefined;

const uploadFileAsync = (context, id) => {
    console.log(context, id);
    setTimeout(() => {
      const element = document.getElementById(id);
      console.log(element);
      element.addEventListener('change', (ev2) => {
        if (element.files.length > 0) {
          console.log('uploading state set', element.files );
          MY_FILE_UPLOAD = element.files[0];
        }
      });
    }, 1500);
  }

  window.lowdefy.registerJsAction('uploadFileAsync', uploadFileAsync);
