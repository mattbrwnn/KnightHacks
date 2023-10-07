import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const TranslateText = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const apiKey = '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'; // Replace with your actual API key

  const translateText = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/text-davinci-003/completions',
        {
          prompt: `Translate hello to spanish`,
          max_tokens: 50,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      // Extract the translated text from the response
      const translated = response.data.choices[0].text;
      setTranslatedText(translated);

      console.log(response.data.choices[0].text); // Move this line here
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter text to translate"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Translate" onPress={translateText} />
      {translatedText !== '' && (
        <Text>Translated Text: {translatedText}</Text>
      )}
    </View>
  );
};

export default TranslateText;
