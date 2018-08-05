// you can access an object by either '.' or [].
// if you use [], it should always be a string

// In this example, if value is empty for any field.name, console an error msg

const FIELDS = [
    { label: "Survey Title", name: "title" },
    { label: "Subject Line", name: "subject" },
    { label: "Email Body", name: "body" },
    { label: "Recipient List", name: "emails" },
  ];
    
  const values = { title: "titleValue" , 
                  subject: "subjectValue",
                  body: "bodyValue", 
                  emails: "",
                 }
  
  FIELDS.map(field => {
    const key = field.name; //[title, subject, body, emails]
    let error = null;
    
    if(!values[key]) {
      error = 'Empty field!'
      console.log(key, error)
    }
   
  });