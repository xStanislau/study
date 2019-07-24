async function wait(time = 3000) {
  await new Promise(resolve => setTimeout(resolve, time));
}

export default wait;
