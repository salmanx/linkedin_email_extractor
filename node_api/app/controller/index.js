const express = require("express");
// const axios = require("axios");
const router = express.Router();

router.get("/", function (req, res) {
  const { email } = req.query;
  // check if email is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    res.status(200).json({
      message: `Message received: ${email}`,
    });
  } else {
    res.status(500).json({
      message: `No email found!`,
    });
  }

  // Following code can be used to generate personalised message using gpt
  // Due to insufficient_quota following code does not work

  // try {
  //   // Call OpenAI API to generate a personalized message
  //   const response = await axios.post(
  //     "https://api.openai.com/v1/chat/completions",
  //     {
  //       model: "gpt-4",
  //       messages: [
  //         {
  //           role: "system",
  //           content: "Linkedin  message generator",
  //         },
  //         {
  //           role: "user",
  //           content: `Create a personalized LinkedIn connection message: ${email}`,
  //         },
  //       ],
  //       max_tokens: 150,
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   console.log(response);

  //   const generatedMessage = response.data.choices[0].message.content;

  //   res.json({ email, message: generatedMessage });
  // } catch (error) {
  //   console.error("Error generating message:", error.response?.data || error);
  //   res.status(500).json({ error: "Failed to generate message." });
  // }
});

module.exports = router;
