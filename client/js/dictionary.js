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
/*         "temperature-9ab93a61-bfad-442a-b551-5a155545bb60": {
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
        }, */
        "temperature-417fa14f-c213-4255-92a4-49d766ede1de": {
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
