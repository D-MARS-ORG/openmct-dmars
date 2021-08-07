const dictionary = {
    "rootId": "habitat026",
    "openmct": {
        "firebase": {
            "type": "folder",
            "name": "Firebase",
            "location": "habitat026"
        },
        "sensors": {
            "type": "folder",
            "name": "Sensors",
            "location": "firebase"
        },
        "temperature-417fa14f-c213-4255-92a4-49d766ede1de": {
            "name": "Temperature",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "Celsius",
                        "format": "double",
                        "min": -100,
                        "max": 100,
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
        },
        "temperature-d83b1285-b2c3-4e90-bc0f-52cae41e781e": {
            "name": "Temperature",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "Celsius",
                        "format": "double",
                        "min": -100,
                        "max": 100,
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
        },
        "pressure-81561394-a6f5-47b6-aabd-434861837fd7": {
            "name": "Pressure",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "hPa",
                        "format": "integer",
                        "min": 300,
                        "max": 1100,
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
        },
        "altitude-1416a19d-ff5f-4e89-9ef8-a43977c6f210": {
            "name": "Altitude",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "Meters",
                        "format": "integer",
                        "min": 0,
                        "max": 10000,
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
        },
        "humidity-b0052e24-8bb8-4d42-a732-d19c4f642a7c": {
            "name": "Humidity",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "Percentage",
                        "format": "integer",
                        "min": 0,
                        "max": 100,
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
        },
        "tvoc-3fa885bc-f90a-41f6-99af-984aa2ec6cc0": {
            "name": "TVOC",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "ppb",
                        "format": "integer",
                        "min": 0,
                        "max": 60000,
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
        },
        "eco2-21f24631-adef-487e-837a-fcd03606bb82": {
            "name": "eCO2",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "ppm",
                        "format": "integer",
                        "min": 400,
                        "max": 60000,
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
        },
        "raw-h2-3138798d-8317-48cb-8d01-1c934d3aaf2f": {
            "name": "H2",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        },
        "raw-ethanol-a08f1a42-0120-4d84-a747-2bc86a8c7b48": {
            "name": "Ethanol",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        },
        "temperature-ff4b8240-80d7-47cd-9ede-6d56752c88db": {
            "name": "Temperature",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "Celsius",
                        "format": "double",
                        "min": -100,
                        "max": 100,
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
        },
        "pressure-4c884c66-7e37-4140-b872-b0e4722ddde1": {
            "name": "Pressure",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "hPa",
                        "format": "integer",
                        "min": 300,
                        "max": 1100,
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
        },
        "altitude-cd6b89ea-51f2-4911-8aad-bb6a339fb594": {
            "name": "Altitude",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "Meters",
                        "format": "integer",
                        "min": 0,
                        "max": 10000,
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
        },
        "humidity-8837e6c0-1fd6-4e6e-a3cd-da69367135a7": {
            "name": "Humidity",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "Percentage",
                        "format": "integer",
                        "min": 0,
                        "max": 100,
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
        },
        "tvoc-97bf84a8-4810-47cf-930d-f49ca733d2c1": {
            "name": "TVOC",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "ppb",
                        "format": "integer",
                        "min": 0,
                        "max": 60000,
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
        },
        "eco2-ad702d2d-a134-407b-9cf7-270151ee177e": {
            "name": "eCO2",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "ppm",
                        "format": "integer",
                        "min": 400,
                        "max": 60000,
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
        },
        "raw-h2-7fe15b40-7e4c-4382-8b92-ce2f019d5d31": {
            "name": "H2",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
        },
        "raw-ethanol-2b01ca31-35fa-479f-a61c-ff47f6f7af5d": {
            "name": "Ethanol",
            "type": "telemetryPoint",
            "location": "sensors",
            "telemetry": {
                "values": [
                    {
                        "key": "value",
                        "name": "Value",
                        "units": "ppm",
                        "format": "integer",
                        "min": 0,
                        "max": 100000,
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
