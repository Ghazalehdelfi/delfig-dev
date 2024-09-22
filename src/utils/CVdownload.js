import resume from "../assets/resume.pdf";

const CVdownload = () => {
  fetch(resume).then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "GhazalehDelfiResume.pdf";
      alink.click();
    });
  });
};

export default CVdownload;
