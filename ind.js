let mailtransporter = nodemailer.createTransport({
  service: 'gmail',
 secure:false,
  auth: {
      user: 'b121041@iiit-bh.ac.in',
      pass: '88740rK@',
  }
})

let details = {

  from: 'suryapublicschool2023@gmail.com',
  to: 'ravikumar87070rk@gmail.com',

  subject: "school info purpose",
  text: `my name is ${req.body.name} and My number is ${req.body.number}. ${req.body.message}`
}

mailtransporter.sendMail(details, (err) => {
  if (err)
      console.log(err);
  else
      console.log("send successfully");
})
