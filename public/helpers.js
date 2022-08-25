var MY_FILE_UPLOAD = undefined;

const uploadFileAsync = (context, field) => {
    let input = document.createElement('input');
    input.type = 'file';
    input.onchange = _this => {
        let files =   Array.from(input.files);
        console.log('uploading',  files[0]);
        MY_FILE_UPLOAD = files[0];
        context.actions.SetState({
          [field]: files[0].name,
        })
    };
    input.click();
  }

  window.lowdefy.registerJsAction('uploadFileAsync', uploadFileAsync);
