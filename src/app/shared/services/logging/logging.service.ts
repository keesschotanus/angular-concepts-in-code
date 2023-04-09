import { Injectable } from '@angular/core';
import { LogLevel } from '../../../shared/services/logging/log-level.enum';

/**
 * Simple logging service that currently is only capable of logging to the console.
 * It does have a notion of a log level.
 * Messages will only be logged if their level is at least as high as the current log level.
 */
@Injectable()
export class LoggingService {

  /**
   * The current log level.
   */
  private logLevel: LogLevel = LogLevel.Info;

  /**
   * Sets the current log level.
   * Only messages at this or a higher lg level are actually logged.
   * @param logLevel The log level to set.
   */
  public setLogLevel(logLevel: LogLevel): void {
    this.logLevel = logLevel;
  }
  /**
   * Logs a message at 'Trace' level.
   * @param message The message to log.
   */
  public trace(message: string) {
    this.log(LogLevel.Trace, message);
  }

  /**
   * Logs a message at 'Info' level.
   * @param message The message to log.
   */
  public info(message: string) {
    this.log(LogLevel.Info, message);
  }

  /**
   * Logs a message at 'Warning' level.
   * @param message The message to log.
   */
  public warning(message: string) {
    this.log(LogLevel.Warning, message);
  }

  /**
   * Logs a message at 'Error' level.
   * @param message The message to log.
   */
  public error(message: string) {
    this.log(LogLevel.Error, message);
  }

  /**
   * Logs a message at 'Fatal' level.
   * @param message The message to log.
   */
  public fatal(message: string) {
    this.log(LogLevel.Fatal, message);
  }

  /**
   * Logs a message at the supplied log level.
   * The message is only logged when the supplied log level is equal or higher than then current log level.
   * @param message The message to log.
   */
  public log(logLevel: LogLevel, message: string) {
    if (logLevel >= this.logLevel) {
      console.log(message);
    }
  }

}
