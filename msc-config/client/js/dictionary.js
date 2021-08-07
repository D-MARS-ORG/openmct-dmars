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
        "temperature-MSC-417fa14f-c213-4255-92a4-49d766ede1de": {
            "name": "Temperature MSC",
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
        "temperature-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb": {
            "name": "Temperature MSC",
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
        "pressure-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb": {
            "name": "Pressure MSC",
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
        "altitude-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb": {
            "name": "Altitude MSC",
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
        "humidity-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb": {
            "name": "Humidity MSC",
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
        "tvoc-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb": {
            "name": "TVOC MSC",
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
        "eco2-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb": {
            "name": "eCO2 MSC",
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
        "raw-h2-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb": {
            "name": "H2 MSC",
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
        "raw-ethanol-MSC-35d460c9-48b3-428f-98ff-9c57a42fddeb": {
            "name": "Ethanol MSC",
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
        "temperature-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0": {
            "name": "Temperature MSC",
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
        "pressure-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0": {
            "name": "Pressure MSC",
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
        "altitude-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0": {
            "name": "Altitude MSC",
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
        "humidity-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0": {
            "name": "Humidity MSC",
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
        "tvoc-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0": {
            "name": "TVOC MSC",
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
        "eco2-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0": {
            "name": "eCO2 MSC",
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
        "raw-h2-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0": {
            "name": "H2 MSC",
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
        "raw-ethanol-MSC-e82524b8-1067-48af-a7e4-da6583f2f8f0": {
            "name": "Ethanol MSC",
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
