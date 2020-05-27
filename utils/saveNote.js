import AsyncStorage from '@react-native-community/async-storage';

const saveNote = async (note) => {
  /**
   * I assume the basic note model will look like this:
   * note: {
   *  title: string,
   *  body: string,
   * }
   * will need to add a key here
   */
    console.log(`my note looks like \n'${note}'`)
  
  let key = note.slice(0,5)
  try {
    let holder = await AsyncStorage.setItem(key, note);
    console.log(holder, 'this is holder')
    return holder
  } catch (error) {
    console.log(error);
  }

};

export default saveNote;
