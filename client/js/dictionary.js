const dictionary = {
    "rootId": "habitate026",
    "openmct": {
        "firebase": {
            "type": "folder",
            "name": "Firebase",
            "location": "habitate026"
        },
        "sensors": {
            "type": "folder",
            "name": "Sensors",
            "location": "firebase"
        },
        "temperature": {
            "name": "Temperature",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "C",
                        "format": "double",
                        "min": 0,
                        "max": 1000000,
                        "hints": {
                            "range": 1
                        }
                    },
                    {
                        "key": "utc",
                        "source": "timestamp",
                        "name": "Timestamp",
                        "format": "utc",
                        "hints": {
                            "domain": 1
                        }
                    }
                ]
            }
        }
    }
}
