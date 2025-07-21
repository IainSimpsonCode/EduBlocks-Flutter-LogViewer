export async function getParticipantInfo(PID, AID) {
  const url = '/logs';
  const requestBody = {
    filter: {
      PID: PID,
      AID: AID
    },
    sort: {
      time: 1
    },
    limit: 0
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching logs:', error);
    return null;
  }
}

// export async function getParticipantInfo(PID, AID) {
//     return `Dummy data from ${PID} and ${AID}`
// }
