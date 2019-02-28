/* eslint-disable */

/**
 * @fileoverview gRPC-Web generated client stub for quiz
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.quiz = require('./quiz_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.quiz.QuizerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.quiz.QuizerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.quiz.QuizerClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.quiz.QuizerClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.quiz.QuizRequest,
 *   !proto.quiz.QuizResponse>}
 */
const methodInfo_Quizer_GetQuiz = new grpc.web.AbstractClientBase.MethodInfo(
  proto.quiz.QuizResponse,
  /** @param {!proto.quiz.QuizRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.quiz.QuizResponse.deserializeBinary
);


/**
 * @param {!proto.quiz.QuizRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.quiz.QuizResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quiz.QuizResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quiz.QuizerClient.prototype.getQuiz =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quiz.Quizer/GetQuiz',
      request,
      metadata,
      methodInfo_Quizer_GetQuiz,
      callback);
};


/**
 * @param {!proto.quiz.QuizRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quiz.QuizResponse>}
 *     The XHR Node Readable Stream
 */
proto.quiz.QuizerPromiseClient.prototype.getQuiz =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getQuiz(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.quiz.QuizRequest,
 *   !proto.quiz.QuizResponse>}
 */
const methodInfo_Quizer_SetQuiz = new grpc.web.AbstractClientBase.MethodInfo(
  proto.quiz.QuizResponse,
  /** @param {!proto.quiz.QuizRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.quiz.QuizResponse.deserializeBinary
);


/**
 * @param {!proto.quiz.QuizRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.quiz.QuizResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.quiz.QuizResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.quiz.QuizerClient.prototype.setQuiz =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/quiz.Quizer/SetQuiz',
      request,
      metadata,
      methodInfo_Quizer_SetQuiz,
      callback);
};


/**
 * @param {!proto.quiz.QuizRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.quiz.QuizResponse>}
 *     The XHR Node Readable Stream
 */
proto.quiz.QuizerPromiseClient.prototype.setQuiz =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setQuiz(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.quiz;

